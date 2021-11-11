
class LikeButton extends React.Component {
  state = {
    
  };

  addLike = () => {
    
  };

  render() {
    const likes = this.state.likes;
    if (likes === 0) {
      return (
        <div>
          <button className="button" onClick={this.addLike} >
            <i className="mdi mdi-heart" />
          </button>
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="mdi mdi-heart text-danger" />
          </button>
        </div>
      );
    }
  }
}
ReactDOM.render(
  <LikeButton />, document.getElementById('likebtn'));

  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      this.setState({ liked: !this.state.liked});
    }
    render() {
      let buttonText = this.state.liked? 'Unlike': 'Like';
      return (
        <button onClick={this.handleClick} className="like">
          <i className="fa fa-heart"></i>&nbsp;
          {buttonText}</button>
       );
    }
  }
  ReactDOM.render(<LikeButton />, document.getElementById('main'));

