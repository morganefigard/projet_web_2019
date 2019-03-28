import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './ArtistsForm.css'

export default class ArtistsForm extends Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            artistNameValue: '',
            artistNameAlert: '', 
            artistDateValue: '',
            artistFollowersValue: 0,
            artists: []
          };
      
        this.onDismiss = this.onDismiss.bind(this);
        this.addArtist = this.addArtist.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateNameValue = this.updateNameValue.bind(this);
    }

    handleSubmit() {
        if(this.state.artistNameValue !== '') {
            this.addArtist();
            this.setState({ artistNameAlert: this.state.artistNameValue });
            this.setState({ visible: true });
            this.setState({ artistNameValue: '' });
        }
    }

    addArtist() {
        console.log("Adding an artist to the artists array");
        this.setState(prevState => ({
            artists: [...prevState.artists, { "name": this.state.artistNameValue, "birthdate": "10/10/2010" }]
          }))
    }
    
    onDismiss() {
        this.setState({ visible: false });
    }

    updateNameValue(evt) {
        evt.preventDefault();
        this.setState({
          artistNameValue: evt.target.value
        });
    }

    updateDateValue(evt) {
        evt.preventDefault();
        if(evt.target.value != undefined) {
            this.setState({
                artistDateValue: evt.target.value
            });
        }
    }

    updateFollowersValue(evt) {
        evt.preventDefault();
        if(evt.target.value != undefined) {
            this.setState({
                artistFollowersValue: evt.target.value
            });
        }
    }

    render() {
    return (
      <div className="ArtistsForm">
        <Form>
            <FormGroup>
                <Label for="name">Name of the artist</Label>
                <Input type="text" name="name" id="name" placeholder="Ex. : Bob Marley" value={this.state.artistNameValue} onChange={this.updateNameValue} />
            </FormGroup>
            <FormGroup>
                <Label for="birth">Birth date</Label>
                <Input type="date" name="birth" id="birth" value={this.state.artistDateValue} onChange={(event) => this.setState({artistDateValue: event.target.value})} />
            </FormGroup>
            <FormGroup>
                <Label for="followers">Number of followers</Label>
                <Input type="number" name="followers" id="followers"  value={this.state.artistFollowersValue} onChange={(event) => this.setState({artistFollowersValue: event.target.value})} />
            </FormGroup>
            <FormGroup>
                <Button onClick={this.handleSubmit}>Add an artist</Button>
                {/*add other button to clear all fields*/}
            </FormGroup>
            <FormGroup>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {this.state.artistNameAlert} added!
                </Alert>
            </FormGroup>
        </Form>
        <ul>
            {this.state.artists.map(function(artist, index){
                return (
                    <li key={index}>Name: {artist.name}, birthdate: {artist.birthdate}</li>
                )
            })}
        </ul>
        <p>Date entered: {this.state.artistDateValue}</p>
        <p>Followers entered: {this.state.artistFollowersValue} </p>
      </div>
    )
  }
}
