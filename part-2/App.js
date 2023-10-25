function App() {
    return (
      <div>
        <Tweet
          name="Samuel Narciso"
          username="booda"
          date={new Date().toDateString()}
          message="tweet"
        />
        <Tweet
          name="krunalkumar"
          username="officialkrunalkumar"
          date={new Date().toDateString()}
          message="tweet"
        />
        <Tweet
          name="dylan smith"
          username="djsmith"
          date={new Date().toDateString()}
          message="tweet"
        />
      </div>
    );
  }