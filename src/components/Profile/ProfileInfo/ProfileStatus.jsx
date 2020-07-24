import React from 'react';

class ProfileStatus extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editMode : false,
      status : this.props.status
    };
    this.activateEditMode = this.activateEditMode.bind(this);
    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.onStatusChanged = this.onStatusChanged.bind(this);
  }
  activateEditMode(){
    this.setState({
      editMode : true
    })
  }
  deactivateEditMode(){
    this.setState({
      editMode : false
    })
    this.props.updateStatus(this.state.status);
  }
  onStatusChanged(e){
    this.setState({
      status : e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.status !== this.props.status){
      this.setState({
        status : this.state.status
      })
    }
  }
  render(){
    return (
      <div>
        {!this.state.editMode 
          ? <span onDoubleClick={this.activateEditMode}>{this.props.status || 'add status'}</span> 
          : <input onBlur={this.deactivateEditMode} onChange={this.onStatusChanged} autoFocus={true} type="text" value={this.state.status}/>}
      </div>
    )
  }
}

export default ProfileStatus;