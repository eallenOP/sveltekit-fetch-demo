/* The load function can be used to fetch data
   as soon as the page loads, and pass it to the 
   page to display in the front end */

export async function load({ fetch }) {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const dog = await res.json();
  return { dog };
}

/*
The dog api above returns this:

{
    "message": "https://images.dog.ceo/breeds/sharpei/noel.jpg",
    "status": "success"
}

...so the dog object being returned to your +page.svelte will contain the message and status properties
*/
