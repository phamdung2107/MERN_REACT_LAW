import "./BottomTabs.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StoreIcon from "@mui/icons-material/Shop";
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from "@mui/icons-material/Person";
import DehazeIcon from "@mui/icons-material/Dehaze";

const BottomTab = () => {

  return (
    <>
      <div className="bottomOption">
        <Link to="/">
          <HomeIcon
            style={{
              color: "#000",
              fontSize: "35px",
              margin: "5px",
              opacity: ".8",
            }}
          />
        </Link>
        <Link to="/search">
          <SearchIcon
            style={{
              color: "#000",
              fontSize: "35px",
              margin: "5px",
            }}
          />
        </Link>
        <Link to="/posts">
          <div
            style={{
              position: "relative",
            }}
          >
            <StoreIcon
              style={{
                color: "#000",
                fontSize: "35px",
                margin: "5px",
                opacity: ".8",
              }}
            />
          </div>
        </Link>
        <Link to="/news">
          <div
            style={{
              position: "relative",
            }}
          >
            <FeedIcon
              style={{
                color: "#000",
                fontSize: "35px",
                margin: "5px",
                opacity: ".8",
              }}
            />
          </div>
        </Link>
        <Link to="/me">
          <PersonIcon
            style={{
              color: "#000",
              fontSize: "35px",
              margin: "5px",
              opacity: ".8",
            }}
          />
        </Link>
        <Link to="/more">
          <DehazeIcon
            style={{
              color: "#000",
              fontSize: "35px",
              margin: "5px",
              opacity: ".8",
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default BottomTab;
