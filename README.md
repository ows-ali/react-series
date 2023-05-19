# Learn React by building a Basic Movie CRUD App

## Step 1: Setting up React application

Lets learn React basics by building a Movie application.

Make sure you have installed [Nodejs](https://nodejs.org/en/download)

Run `npx create-react-app movieapp`
(where movieapp is the name of your application, you can name it whatever you want)

Now, once the installation is finished, run

```
cd movieapp
npm start
```

### Cleanup

We will remove every file inside src, except index.js, and we will also put our predefined css in index.css to save time

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #d2dbdd;
}
.heading_style {
  padding: 30px 0;
  text-align: center;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
  background-color: #fff;
  font-size: 1.5rem;
  margin-bottom: 30px;
}
.cards {
  width: 100%;
  height: auto;
}
.card {
  margin: 6%;
  /* transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1); */
  background-color: #fff;
  width: 21.25%;
  border-radius: 12px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  float: left;
}

.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05, 1.05);
}

.card_img {
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card_info {
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
  background-color: #fff;
}

.card_category {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
  background-color: #fff;
}

.card_title {
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
  background-color: #fff;
  text-transform: capitalize;
}
button {
  padding: 5px 8px;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  background-color: #fff;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
}
.addForm {
  width: 600px;
  margin: auto;
  text-align: center;
  background: white;
}

input {
  display: block;
  width: 100%;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  font-size: 24px;
  /* border: none; */
}
.addBtn {
  font-size: 20px;
  padding: 10px;
  color: #868686;
  border-radius: 5px;
}
.main-heading {
  text-align: center;
  color: #868686;
  background: white;
  margin-top: 100px;
  padding: 20px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}

```

## Step 2: Creating movie list component

First, we add Movies.js in src directory, which will contain our whole movie app (basically the add movie form and the movie listing component)

```
const [data, setData] = useState([
    {
      id: 1,
      name: "DARK",
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "Drama",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
    ...
])
...
<MovieListing data={data} />
```

Then MovieListing.js looks like this:

```

const MovieListing = ({ data }) => {
  return (
    <div>
      {data.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};
```

And last, our MovieCard component will look like this:

```

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="card" key={movie.id}>
      <img src={movie.imgSrc} alt="img" className="card_img" />
      <div className="card_info">
        <span className="card_category">{movie.category}</span>
        <h3 className="card_title">{movie.name}</h3>
        <a href={movie.link} target="_blank" rel="noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;

```

## Step 3: Adding new movie form

We will create addMovie function in Movies.js which will be passed as callback to AddMovie (because we want to update state of parent so we need to pass a function from parent to child which child can use)
Here is our updated Movies.js

```
const addMovie = (movie) => {
    setData([...data, movie]);
  };
...
<AddMovie addMovie={addMovie} />

```

And the AddMovie.js looks like this

```

  const handleAdd = (e) => {
    e.preventDefault();
    addMovie({ name, imgSrc, category, link });
  };

  return (
    <div className="addForm">
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          placeholder="enter image url"
          value={imgSrc}
          onChange={(e) => {
            setImgSrc(e.target.value);
          }}
        />
        <input
          placeholder="enter movie name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="enter movie category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          placeholder="enter movie url"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />

        <button type="submit" className="addBtn">
          Add Movie
        </button>
      </form>
    </div>
```

# Conclusion

Here we learnt, how you can break your React application into multiple components. However, there is no strict rule for that, you will see different structure in different projects. It is just a matter of preference. But just make sure that the code is reusable and not too lengthy to be readable.

We also saw how to pass data as props and function as props/callbacks.

This gives you a good starting point to work with React applications.
