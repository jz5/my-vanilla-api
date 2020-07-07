window.getFoo = (count) =>
{
    return "a".repeat(count);
}


var db = new Dexie("friend_database");
db.version(2).stores({
    friends: 'name,shoeSize'
});

window.putFriend = (friend) =>
    db.friends.put(friend);

window.getFriends = () =>
    db.friends.toArray();

window.getFriend = (name) =>
    db.friends.get(name);



