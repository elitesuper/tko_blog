import {React} from 'react';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import '../index.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Blog = ({content}) => {
  const params = useParams()

  const createdDate = new Date(content(params.id)?.created).toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {content(params.id) ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {createdDate}</p>
            <h1>{content(params.id).title}</h1>
            <div className='blog-subCategory'>
            {content(params.id).tags && content(params.id).tags.length > 0 &&
                <div>
                  <Chip label={content(params.id).tags[0].name} />
                </div>
}
            </div>
          </header>
          <img src={content(params.id).featured_image} alt='cover'/>
          <div className='blog-content(params.id)' dangerouslySetInnerHTML={{__html: content(params.id).body}}></div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};
export default Blog;