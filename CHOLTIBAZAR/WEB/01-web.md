// app/page.js
import { fetchGraphQL } from './graphql';

export default async function Page() {
  const query = `
    query {
      getProducts {
        id
        name
        price
      }
    }
  `;

  const res = await fetchGraphQL(query);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {res.data.getProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

// Function to fetch data from GraphQL API
async function fetchGraphQL(query) {
  const res = await fetch('https://your-graphql-endpoint.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  return await res.json();
}
