function Emoji(props) {

    const moodEmojis = {
        Happy: "😄",
        Sad: "😥",
        Angry: "😡",
      };
    
      const emoji = moodEmojis[props.mood] || "";
    
    return (
        <p>{emoji}</p>
    );
}

export default Emoji