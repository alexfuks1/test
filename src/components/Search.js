import React from 'react';
import searchIcon from '../media/search.png';
import hashTah from '../media/hashtag.png';
import axios from 'axios';

class Search extends React.Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15045309-1b21b6e938a477a3ec63bed87',
        images: []
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] });
            } else {
                axios
                    .get(
                        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                        this.state.searchText
                        }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
                    )
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err));
            }
        });
        this.setTags();
    };
    setTags(){
        console.log(this.state.images);

    }
    render() {
        const { images, tagsArr, search } = this.state;
        return (
            <div className="search">
                <h3 className="search-title">Stunning free images & royalty free stock</h3>
                <div className="search-box">
                    <img className="search-icon" src={searchIcon} alt="img" />
                    <input name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange.bind(this)}
                        className="search-input"
                    />
                </div>
                <div className="search-tags-results">
                    {/* {tagsArr.map((tag, i) => {
                        return <div key={i} className="tag-box">
                            <img src={hashTah} alt="img" className="icon-tag" />
                            <p className="tag-title">{tag}</p>
                        </div>
                    })} */}
                </div>
            </div>
        )
    }
}
export default Search;