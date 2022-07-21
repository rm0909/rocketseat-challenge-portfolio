function PictureBox({ avatar, name, bio }) {
  return (
    <section className="profile-box cards">
        <img id="user-image" src={avatar} alt="profile picture" />
        <h1 id="name">{name}</h1>
        <h3 id="bio">{bio}</h3>
    </section>
  );
}
export { PictureBox };
