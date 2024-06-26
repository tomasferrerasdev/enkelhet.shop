'use client';

import { createUpdateProduct, deleteProductImage } from '@/actions';
import { Loader } from '@/components';
import { Input } from '@/components/base/FormInputs/Input';
import { TextArea } from '@/components/base/FormInputs/TextArea';
import { finishes } from '@/constants';
import {
  FinishType,
  IProduct,
  IProductImage,
  IProductModel,
} from '@/interfaces';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Model } from './Model';

interface Props {
  product: Partial<IProduct> & { ProductImage?: IProductImage[] } & {
    ProductModel?: IProductModel[];
  };
  isNew: boolean;
}

interface Measurements {
  total_height: number;
  seat_height: number;
  width: number;
  depth: number;
}

interface IFormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  finish: FinishType[];
  tags: string;
  series: 'lounge' | 'alabaster' | 'capsule';
  seriesId: string;
  measurements: Measurements;
  images?: FileList;
  model?: FileList;
}

export const ProductForm = ({ product, isNew }: Props) => {
  console.log(product);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedModel, setUploadedModel] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<IFormInputs>({
      defaultValues: {
        ...product,
        tags: product.tags?.join(', '),
        finish: product.finish ?? [],
        measurements: {
          depth: product.measurements?.depth ?? 0,
          seat_height: product.measurements?.seat_height ?? 0,
          width: product.measurements?.width ?? 0,
          total_height: product.measurements?.total_height ?? 0,
        },
        images: undefined,
        model: undefined,
      },
    });

  watch('finish');
  const inputMeasurements = watch('measurements');

  const buttonTitle = isNew ? 'Create new product' : `Update ${product.title}`;

  const onSizeChanged = async (finish: FinishType) => {
    const finishes = new Set(getValues('finish'));
    finishes.has(finish) ? finishes.delete(finish) : finishes.add(finish);
    setValue('finish', Array.from(finishes));
  };

  const onSubmit = async (data: IFormInputs) => {
    const formData = new FormData();
    const { images, model, ...productToSave } = data;
    if (product.id) {
      formData.append('id', product.id ?? '');
    }
    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('finish', productToSave.finish.toString());
    formData.append('tags', productToSave.tags);
    formData.append('series', productToSave.series);
    formData.append('measurements', JSON.stringify(data.measurements));

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }
    if (model) {
      for (let i = 0; i < model.length; i++) {
        formData.append('models', model[i]);
      }
    }
    setLoading(true);
    const { ok, productDB } = await createUpdateProduct(formData);
    if (!ok) {
      return;
    }
    setLoading(false);

    router.replace(`/admin/product/${productDB?.slug}`);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const url = URL.createObjectURL(files[i]);
        urls.push(url);
      }
      setUploadedImages(urls);
    }
  };
  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setUploadedModel(url);
    }
  };

  return (
    <>
      <form
        className={`w-full grid grid-cols-1 xl:grid-cols-2 h-[calc(100vh-81px-56px)]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full h-full border-r border-black flex flex-col justify-between">
          <div>
            <Input
              label="Title"
              id="title"
              type="text"
              formName="title"
              register={register}
            />
            <Input
              label="Slug"
              id="slug"
              type="text"
              formName="slug"
              register={register}
            />
            <TextArea
              label="Description"
              id="description"
              type="text"
              formName="description"
              register={register}
            />
            <Input
              label="Price"
              id="price"
              type="number"
              formName="price"
              register={register}
            />
            <Input
              label="Tags"
              id="tags"
              type="text"
              formName="tags"
              register={register}
            />
            <div className="grid grid-cols-4 w-full border-b border-black ">
              {finishes.map((finishItem) => (
                <button
                  onClick={() => onSizeChanged(finishItem)}
                  className="hover:bg-gray-300 cursor-pointer w-full "
                  key={finishItem}
                >
                  <div
                    className={`flex items-center gap-2 px-2 md:px-4 xl:px-6 py-3 ${getValues('finish').includes(finishItem) ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    <div className="flex items-center gap-2">
                      <div>
                        {getValues('finish').includes(finishItem) ? (
                          '[x]'
                        ) : (
                          <div className="flex items-center">
                            [
                            <svg
                              width="9"
                              height="11"
                              viewBox="0 0 9 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 0L6.51637 6.2L4.56157 11H2.90963L0 3.5H1.5L3.68053 9.05H3.79067L7.54628 0H9Z"
                                fill={
                                  getValues('finish').includes(finishItem)
                                    ? 'white'
                                    : 'black'
                                }
                              />
                            </svg>
                            ]
                          </div>
                        )}
                      </div>
                      <div className="h-4 w-4 relative" key={finishItem}>
                        <Image
                          src={`/woods/${finishItem}.jpg`}
                          alt={`${finishItem} wood`}
                          width={16}
                          height={16}
                          className="rounded-full h-4 w-4"
                        />
                      </div>
                    </div>
                    <p>{finishItem}</p>
                  </div>
                </button>
              ))}
            </div>
            <Input
              label="Stock"
              id="inStock"
              type="number"
              formName="inStock"
              register={register}
            />
            <select
              className="outline-none border-b border-black px-2 md:px-4 xl:px-6 py-3 w-full h-[49px]"
              {...register('series', { required: true })}
            >
              <option value="">[ Select serie ]</option>
              <option>lounge</option>
              <option>alabaster</option>
              <option>capsule</option>
            </select>
            <div className="px-2 md:px-4 xl:px-6 py-3 borde-b border-black">
              <p>Measurements</p>

              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">
                  Total height (cm):{' '}
                </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.total_height')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">
                  Seat height (cm):{' '}
                </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.seat_height')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">Width (cm): </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.width')}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap w-[250px]">Depth (cm): </p>
                <input
                  type="number"
                  className="outline-none w-full"
                  {...register('measurements.depth')}
                />
              </div>
            </div>
          </div>
          <button
            className="w-full p-4 text-white bg-black h-14 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <Loader color="stroke-white" /> : buttonTitle}
          </button>
        </div>
        <div className=" flex flex-col">
          <div className="flex-1 border-b border-black relative">
            <div className="absolute top-4 right-4 z-[15]">
              <input
                className="appearance-none cursor-pointer w-full border-b border-black file:bg-black file:text-white file:h-[49px] file:border-none file:mr-3"
                type="file"
                {...register('model')}
                onChange={handleModelUpload}
              />
            </div>
            {uploadedModel ? (
              <Model measurements={inputMeasurements} model={uploadedModel} />
            ) : (
              product?.ProductModel &&
              product.ProductModel.length > 0 &&
              product.ProductModel[0] && (
                <Model
                  measurements={inputMeasurements}
                  model={product.ProductModel[0].url}
                />
              )
            )}
          </div>

          <div className="flex flex-col justify-end">
            <input
              className="appearance-none w-full border-b border-black file:bg-black file:text-white file:h-[49px] file:border-none file:mr-3 cursor-pointer"
              id="large_size"
              type="file"
              accept="image/png, image/jpeg, image/avif, image/webp"
              multiple
              {...register('images')}
              onChange={handleImageUpload}
            />

            <div className="flex border-b border-black ">
              {uploadedImages.length > 0
                ? uploadedImages.map((url, index) => (
                    <div key={index} className="relative">
                      <img
                        src={url}
                        alt={`Uploaded image ${index + 1}`}
                        className="object-cover p-4 h-[200px] w-[200px] aspect-square"
                      />
                      <button
                        className="p-1 bg-black absolute top-4 right-4 flex items-center justify-center text-white"
                        onClick={() => {
                          const newImages = [...uploadedImages];
                          newImages.splice(index, 1);
                          setUploadedImages(newImages);
                        }}
                      >
                        [x]
                      </button>
                    </div>
                  ))
                : product.ProductImage?.map((image) => (
                    <div key={image.id} className="relative">
                      <Image
                        src={image?.url ? image.url : '/placeholder.png'}
                        alt={`${product.title} wood`}
                        className="object-cover p-4 h-[200px] w-[200px] aspect-square"
                        width={300}
                        height={300}
                      />
                      <button
                        className="p-1 bg-black absolute top-4 right-4 flex items-center justify-center text-white"
                        onClick={() => deleteProductImage(image.id, image.url)}
                      >
                        [x]
                      </button>
                    </div>
                  ))}
              <div>
                <div className="p-4 h-[200px] w-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
