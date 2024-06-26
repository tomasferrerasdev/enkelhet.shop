'use client';
import { paypalCheckPayment, setTransactionId } from '@/actions';
import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from '@paypal/paypal-js';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Loader } from '..';

interface Props {
  orderId: string;
  amount: number;
}

export const PaypalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const rountedAmount = Math.round(amount * 100) / 100;

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    const transactionId = await actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            currency_code: 'USD',
            value: `${rountedAmount}`,
          },
        },
      ],
    });

    const { ok } = await setTransactionId(orderId, transactionId);
    if (!ok) {
      throw new Error('Order update failed');
    }

    return transactionId;
  };
  const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
    const details = await actions.order?.capture();
    if (!details) return;
    await paypalCheckPayment(details.id!);
  };

  return isPending ? (
    <div className="w-full flex items-center justify-center h-[200px]">
      <Loader />
    </div>
  ) : (
    <div className="w-full py-4 px-2 md:px-4 xl:px-6">
      <PayPalButtons
        style={{ disableMaxWidth: true }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </div>
  );
};
