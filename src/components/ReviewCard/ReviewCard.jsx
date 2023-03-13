import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreText from "react-show-more-text";
import Avatar from 'react-avatar';
import { getReviewDate, getLastTimeUpdatedDate } from 'utils/getDate';
import { setCorrectAvatarURL } from 'utils/setCorrectAvatarURL';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { AuthorReview, AvatarImage, DateWrapper, DateReview, ReviewInfoWrapper, ReviewText, UserRating, Rate } from './ReviewCard.styled';


export const ReviewCard = ({review}) => {
  const { author, author_details: { avatar_path, rating }, created_at, updated_at, content } = review;
  return (
    <>
      <ReviewInfoWrapper>
          {avatar_path
          ? 
            <AvatarImage
              src={setCorrectAvatarURL(avatar_path)}
              width="50"
              alt={author}
            />      
            : <Avatar size="50" name={author} unstyled={false} />
        }
        <AuthorReview>{author}</AuthorReview>
        <DateWrapper>
          <DateReview>{getReviewDate(created_at)}</DateReview>
          <DateReview>updated { getLastTimeUpdatedDate(updated_at)} ago </DateReview>
        </DateWrapper>
        {rating &&
        <UserRating><span><Rate>{rating}</Rate><span> / 10</span></span> { renderIcons('star', iconSize.md)}</UserRating>  
        }
      </ReviewInfoWrapper>
      <ReviewText>
           <ShowMoreText
                lines={4}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                truncatedEndingComponent={"... "}
            >
            {content}
        </ShowMoreText>
      </ReviewText>
    </>
  )
}


ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    author_details: PropTypes.shape({
      rating: PropTypes.string,
      avatar_path: PropTypes.string,
    })
  })
}
  