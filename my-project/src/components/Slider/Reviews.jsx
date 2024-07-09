import React, { useState } from 'react';
import styled from 'styled-components';
// Styled components
const ReviewsContainer = styled.div`
  text-align: center;
  padding: 20px;
   background-color:rgb(234, 219, 219);
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
   margin-bottom: 80px;
  font-family:italic
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Stars = styled.span`
  color: gold;
  font-size: 1.3rem;
  margin-right: 10px;
`;

const ReviewsCount = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;
const ReviewsCount1 = styled.span`
  font-size: 2rem;
  margin-left: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  border-radius: 8px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Name = styled.span`
  font-weight: bold;
`;



const CardBody = styled.div`
  font-size: 14px;
  color: gray;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`

  background: white;
  border: 1px solid gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const GetQuoteButton = styled.button`

  background: orange;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 20px 30px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: darkorange;
  }
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// Updated input styles
const Input = styled.input`
  margin: 5px 0;
  padding: 10px 15px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-bottom: 20px;
  &:focus {
    border-color: #007BFF;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), 0 0 8px rgba(0,123,255,0.6);
    outline: none;
  }
`;

const TextArea = styled.textarea`

  margin: 5px 0;
  padding: 10px 15px;
  width: 300px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin-bottom: 40px;

  &:focus {
    border-color: #007BFF;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), 0 0 8px rgba(0,123,255,0.6);
    outline: none;

  }
`;

const SubmitButton = styled.button`
  background: green;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right:80px;
  &:hover {
    background: darkgreen;
    color:yellow;
  }
`;

// Initial sample reviews data
const initialReviews = [
  {
    name: 'Martin Jean',
    time: 'Il y a 1 mois',
    content: 'Très satisfait du service, du serveur et de la prestation en personne.'
  },
  {
    name: 'Taha',
    time: 'Il y a 2 mois',
    content: 'Très satisfait du service, du serveur et de la prestation en personne.'
  },
  {
    name: 'Martin Jean',
    time: 'Il y a 1 mois',
    content: 'Très satisfait du service, du serveur et de la prestation en personne.'
  },
  {
    name: 'Martin Jean',
    time: 'Il y a 1 mois',
    content: 'Très satisfait du service, du serveur et de la prestation en personne.'
  },
  {
    name: 'Martin Jean',
    time: 'Il y a 1 mois',
    content: 'Très satisfait du service, du serveur et de la prestation en personne.'
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', content: '' });
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [
      ...prevReviews,
      {
        name: newReview.name,
        content: newReview.content
      }
    ]);
    setNewReview({ name: '', content: '' });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  return (
    <ReviewsContainer>
      <Header>Ils ont été installés par Sunline</Header>
      <Rating>
        <Stars>⭐⭐⭐⭐⭐</Stars>
        <ReviewsCount1>4,6</ReviewsCount1>
        <ReviewsCount>2241 avis Google et Facebook</ReviewsCount>
      </Rating>
     
      <CardsContainer>
        {paginatedReviews.map((review, index) => (
          <Card key={index}>
            <CardHeader>
              <Name>{review.name}⭐⭐⭐⭐⭐</Name>
              
            </CardHeader>
            <CardBody>{review.content}</CardBody>
          </Card>
        ))}
      </CardsContainer>
      <NavigationButtons>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>◀</Button>
        <Button onClick={handleNextPage} disabled={endIndex >= reviews.length}>▶</Button>
      </NavigationButtons>
      <ReviewForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Entrer Votre nom"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <TextArea
          name="content"
          placeholder=" Entrer Votre avis"
          value={newReview.content}
          onChange={handleInputChange}
          required
        />
        <SubmitButton type="submit">Obtenir un devis</SubmitButton>
      </ReviewForm>
    </ReviewsContainer>
  );
};


export default Reviews;

