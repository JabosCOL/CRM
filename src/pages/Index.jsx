import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "David Bolivar",
      telefono: 3204549315,
      email: "david@hotmail.com",
      empresa: "U de los Andes",
    },
    {
      id: 2,
      nombre: "Edisson Arley",
      telefono: 3244587211,
      email: "edisson@hotmail.com",
      empresa: "MexIndustries",
    },
    {
      id: 3,
      nombre: "Jimmy Alexander",
      telefono: 3114441715,
      email: "jimmy@hotmail.com",
      empresa: "Tata",
    },
    {
      id: 4,
      nombre: "Karen Miranda",
      telefono: 3227769611,
      email: "karen@hotmail.com",
      empresa: "Seyspro",
    },
    {
      id: 1,
      nombre: "Maria Angela",
      telefono: 3154557651,
      email: "maria@hotmail.com",
      empresa: "BEG",
    },
  ];
  return clientes;
}

function Index() {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aún</p>
      )}
    </>
  );
}

export default Index;
