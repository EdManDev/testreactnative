import { view, styles, button, text } from "react-native";

export default class App extends Component {
  state = { joke: "press Button for joke" };
  handleButtonPress(e) {
    this.setSate({ joke: "..." });
    fetch(,{headers:{ Accept: 'text/plain'}}).then(r => r.text())
    .then(joke => this.setState({joke}, e => this.setState({joke: 'coud not get joke:('})))
  }

  render() {
    return (
      <view style={styles.container}>
        <view style={styles.jokeContainer}>
          <text style={styles.joke}>{this.state.joke} </text>
        </view>
        <botton onPress={() => this.handleButtonPress()}>
          <text style={style.button}>Press Here as joke!</text>
        </botton>
      </view>
    );
  }
}

const Styles = {
  container: Styles.createViewStyle({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }),
  jokeContainer: Styles.createsViewStyle({
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  }),
  joke: styles.createTextStyle({
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    flex: 2
  })
};
