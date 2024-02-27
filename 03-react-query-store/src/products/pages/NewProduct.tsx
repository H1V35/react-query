import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Button, Image, Input, Textarea } from '@nextui-org/react';
import { createProduct } from '../services/actions';

interface FormInputs {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const DEFAULT_IMAGE = 'https://parceljs.org/assets/og.png';

export function NewProduct() {
  const productMutation = useMutation({
    mutationFn: createProduct,
  });

  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      title: '',
      price: 0,
      image: '',
      description: '',
      category: "men's clothing",
    },
  });

  const newImage = watch('image') || DEFAULT_IMAGE;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    productMutation.mutate(data);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">New product</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col-reverse justify-around gap-4 sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2 gap-2">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input value={field.value} onChange={field.onChange} type="text" label="Title" />
              )}
            />

            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value?.toString()}
                  onChange={(e) => field.onChange(+e.target.value)}
                  type="number"
                  label="Price"
                />
              )}
            />

            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (
                <Input value={field.value} onChange={field.onChange} type="url" label="Image url" />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea value={field.value} onChange={field.onChange} label="Description" />
              )}
            />

            <Controller
              control={control}
              name="category"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="rounded-md p-3 bg-gray-800 w-full"
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />

            <Button
              type="submit"
              className="mt-2"
              isLoading={productMutation.isPending}
              color="primary"
            >
              {productMutation.isPending ? 'Sending...' : 'Create'}
            </Button>
          </div>

          <div className="sm:w-1/2 max-h-[408px] items-center bg-white rounded-2xl p-10 flex justify-center">
            <Image src={newImage} width={300} height={380} className="bg-white" />
          </div>
        </div>
      </form>
    </div>
  );
}
