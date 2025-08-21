


export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const data = await response.json();

  return (
    <div>
      {data.todos.map(()) => {

      }}
    </div>
  );
}