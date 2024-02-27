import { Button, Image, Input, Textarea } from '@nextui-org/react';

export function NewProduct() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">New product</h1>

      <form className="w-full">
        <div className="flex flex-col-reverse justify-around gap-4 sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2 gap-2">
            <Input type="text" label="Titulo del producto" />
            <Input type="number" label="Precio del producto" />
            <Input type="url" label="Url del producto" />
            <Textarea label="Descripcion del producto" />
            <select className="rounded-md p-3 bg-gray-800 w-full">
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <Button className="mt-2" color="primary">
              Create
            </Button>
          </div>

          <div className="sm:w-1/2 max-h-[408px] items-center bg-white rounded-2xl p-10 flex justify-center">
            <Image
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              width={300}
              height={380}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
