async function getRandomUser()
{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    const user = data.results[0];

    updateUser(user)

}
function updateUser(user)
{
    const name = document.getElementById('username');
    const image = document.getElementById('userimage');

    name.innerText = `${user.name.first} ${user.name.second}`;
    image.setAttribute('src' , `${user.picture.medium}`);
}