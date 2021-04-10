import React, { Component } from "react";
import axios from "axios";
import MovieItem from "./../../../Components/MovieItem";
import Loader from "./../../../Components/Loader";


import {
  actFecthListMovie
} from "./modules/action";
import { connect } from "react-redux";
class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    /**
     * 1.pending
     * 2.resolve
     * 3.reject
     */
    //  pending
    // this.setState({
    //   loading: true,
    //   data: null,
    //   error: null,
    // });
    // axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     // resolve
    //     this.setState({
    //       loading: false,
    //       data: result.data,
    //       error: null,
    //     });
    //   })
    //   .catch((err) => {
    //     // reject
    //     this.setState({
    //       loading: false,
    //       data: null,
    //       error: err,
    //     });
    //   });
    this.props.actFecthListMovie();
  }
  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    if (data) {
      return data.map((movie) => {
        return <MovieItem key={movie.maPhim} movie={movie} />;
      });
    }
    // return <p>Loading.....</p> duoc
  };

  render() {
    console.log("reder", this.state);
    console.log(this.props.data);
    return (
      <div className="container">
        <h1>ListMoviePage</h1>

        <div className="row">{this.renderListMovie()}</div>
        <div className="col-md-3"></div>
        <div className="card"></div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actFecthListMovie: () => {
      dispatch(actFecthListMovie());
    },
  
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
