export const getUserData = async () => {
  const req = await fetch('https://swapi.dev/api/people/1');
  const res = await req.json();

  return res.name;
};
