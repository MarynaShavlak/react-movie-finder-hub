import { TbMovie } from 'react-icons/tb';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';
import { ImSearch } from 'react-icons/im';
import { FaRegSadCry } from 'react-icons/fa';
import { ImStarFull } from 'react-icons/im';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiDotsHorizontal } from 'react-icons/hi';

export function renderIcons(param, size) {
  switch (param) {
    case 'movie':
      return <TbMovie size={size} className="contact-form__icon" />;
    case 'back':
      return <IoMdArrowRoundBack size={size} className="contact-form__icon" />;
    case 'film':
      return <RiMovie2Fill size={size} className="contact-form__icon" />;
    case 'search':
      return <ImSearch size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    case 'star':
      return (
        <ImStarFull size={size} className="contact-form__icon full-star" />
      );
    case 'like':
      return <AiFillLike size={size} className="contact-form__icon like" />;
    case 'dislike':
      return <AiFillDislike size={size} className="contact-form__icon like" />;
    case 'ellipsis':
      return (
        <HiDotsHorizontal size={size} className="contact-form__icon like" />
      );
    case 'left':
      return (
        <HiArrowNarrowLeft size={size} className="contact-form__icon like" />
      );
    case 'right':
      return (
        <HiArrowNarrowRight size={size} className="contact-form__icon like" />
      );
    default:
      return <span>icon</span>;
  }
}
