import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SySImg from "../../public/SyS.jpg";
import axios from "../utils/axiosInstance";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);

        // api request
        const response = await axios.get(
          `/posts?page=${currentPage}&q=${searchValue}`
        );
        const data = response.data.data;
        setPosts(data.posts);
        setTotalPage(data.pages);

        setLoading(false);
      } catch (error) {
        setLoading(false);

        const response = error.response;
        const data = response.data;
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true,
        });
      }
    };

    getPosts();
  }, [currentPage]);

  useEffect(() => {
    if (totalPage > 1) {
      let tempPageCount = [];

      for (let i = 1; i <= totalPage; i++) {
        tempPageCount = [...tempPageCount, i];
      }

      setPageCount(tempPageCount);
    } else {
      setPageCount([]);
    }
  }, [totalPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = async (e) => {
    try {
      const input = e.target.value;

      setSearchValue(input);

      const response = await axios.get(`/posts?q=${input}&page=${currentPage}`);
      const data = response.data.data;

      setPosts(data.posts);
      setTotalPage(data.pages);
    } catch (error) {
      const response = error.response;
      const data = response.data;
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: true,
      });
    }
  };

  const butstyle = {
    color: "white",
    marginTop: "20px",
    background:" black",
    height: "40px",
    borderRadius: "15px",
    cursor: "pointer",
    fontWeight:" 800",
    boxShadow: "6px 6px 6px silver, -6px -6px 6px black",
    transition: "0.5s",
    // marginLeft: "10px",
    marginBottom: "0px",
    display: "flex",
  }



  return (
    <>
    <div className="Homestart">
     <h6> Everything Is Personal. Including This Blog.</h6>
     </div>
        <div className="homesec">
          <h1>Train of Thought.</h1>
          <h6>My thoughts, my stories, my experiences.</h6>
        <marquee behavior="" direction="" >"Welcome to Our Website! 🌟 Stay Updated with the Latest News and Offers. 📢 Check Back Often for More Updates!" </marquee>
        </div>


    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop: "10px"}}>
    <div className="container">
        <a className="navbar-brand text mb-1">Welcome to YasBlogs</a>
        <button data-mdb-button-init className="navbar-toggler text-white" type="button" data-mdb-collapse-init data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row ">
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link hover:bg-sky-700" href="#">
                        <i className="fab fa-facebook-f shadow-2xl text-white"> <a href="https://www.facebook.com/profile.php?id=100012888973700" target="_blank" style={{color: "white"}}> <u>Facebook</u></a></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-instagram text-white"> <a href="https://www.instagram.com/yasirali.21/" target="_blank" style={{color: "white"}}>
                        <u>Instagram</u> </a></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-linkedin text-white"> <a href="https://en.wikipedia.org/wiki/Twitter" target="_blank" style={{color: "white"}}> <u>Twitter</u></a></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-github text-white"> <a href="https://www.linkedin.com/in/yasir-ali-4057a326a/" target="_blank" style={{color: "white"}}><u>LinkedIN</u> </a></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <i className="fab fa-twitter text-white"> <a href="https://github.com/Yasiralishah21" target="_blank" style={{color: "white"}}><u>Github</u></a></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

                                                              <div className="papajibolpapaji">

        <div className="container" style={{marginBottom: "100px"}}>
    <br/>
</div>

<div className="heading">
  <h1>BLOGS I LIKE? ONLY ABOUT SPORTS.</h1>
</div>

<div className="containerfootballer">
  <img src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" alt="messi"/>
  <img src="https://images.axios.com/Tussnpsai2h2JPyupEClibRovfc=/0x0:1920x1080/1920x1080/2022/02/22/1645547797667.jpg?w=1920" alt="nba" />
  <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt="cricket" />
  <img src={SySImg} alt="yasir" />
  <img src="https://www.mensjournal.com/.image/t_share/MTk2MTM3MzQ1NDA0MzE0NzY5/nadal-tennis-main-1e2.jpg" alt="tennis" />
  <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EMOQZ6MH2NOVREVLMPRSXNYS4Q.jpg" alt="arshad" />
  <img src="https://a.espncdn.com/photo/2023/0527/r1179051_1296x729_16-9.jpg" alt="ronnie" /> 
  <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BVYJ2SAE5MI6ZDB7GUTPQGZDHM.jpg" alt="tennis" />
</div>

    </div>
<hr />
<br />

    <div style={{backgroundColor:"#c1bdb8"}}>
      <h1 style={{textAlign:"center", color:"Black", fontSize:"50px", fontFamily:"monospace", fontStyle:"oblique"}}>Posts</h1>
      <input
        className="saerch-input"
        type="text"
        name="search"
        placeholder="Search here"
        onChange={handleSearch}
      />
    <div className="flexbox-container wrap">


        {loading
          ? "Loading..."
          : posts.map((post) => (
              <div
                className="post-card"
                key={post._id}
                onClick={() => navigate(`/posts/detail-post/${post._id}`)}
              >
                <h4 className="card-title">{post.title}</h4>
                <p className="card-desc">{post.desc.substring(0, 50)}</p>
              </div>
            ))}
      </div>

  
      {pageCount.length > 0 && (
        <div className="pag-container">
          <button
            className="pag-button"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            prev
          </button>
          {pageCount.map((pageNumber, index) => (
            <button
              className="pag-button"
              key={index}
              onClick={() => handlePage(pageNumber)}
              style={{
                backgroundColor: currentPage === pageNumber ? "#ccc" : "",
              }}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className="pag-button"
            onClick={handleNext}
            disabled={currentPage === totalPage}
          >
            next
          </button>
        </div>
      )}
      </div>


      <hr />
    <div className="updatediv" style={{display:"flex", gap: "10px", height: "250px", borderBottom: "1px solid black", marginTop: "50px", width: "90%", marginLeft:"90px"}}>
    <div className="update" style={{ marginTop: "10px", width: "50%"}}>
      <h2 className="font_2 wixui-rick-text_text" style={{textAlign: "left", fontSize: "18px",fontWeight:"bolder", marginTop: "-12px", fontFamily: "monospace", marginLeft: "200px"}}> 
      1. Don't miss out! Get our latest posts delivered straight to your inbox!  <br /> <br />
      2. Stay in the loop! Subscribe for insider info and special offers!"  <br /> <br />
      3. Be the first to know! Enter your email for fresh content and freebies!  <br />
      </h2>
    </div>

<div className="email" style={{ height:"120px", width:"350px", marginTop: "50px", marginLeft:"100px"}}>
      <label htmlFor=""  style={{fontFamily: "monospace",  fontSize: "40px", marginBottom:"10px"}}> <b>Email</b></label> <br />
      <div>      
          <input type="email" name="email" id="email" placeholder="yasiralishah021@gmail.com" className="subinput" />
          <button className="subbutton" >Subscribe</button>
      </div>
    </div>
</div>


    <div>
        <p style={{textAlign: "center", backgroundColor:"white", border:"1px solid black", marginTop:"10px", position: "absolute", marginLeft:"450px"}}>
        Connect With Us <br />  &copy;2024 Made by Yasir Ali | All Rights Reserved
          </p>
    </div>  
    </>
  );
};

export default Home;
