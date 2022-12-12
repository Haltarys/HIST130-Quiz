import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';

function About() {
  return (
    <>
      <Typography variant="h4">About this website</Typography>
      <Typography variant="body1" marginBottom={4}>
        This website is an interactive app to help you memorise the definitions
        of HIST 130 at CSUSM.
      </Typography>

      <Typography variant="h5">Reference</Typography>
      <Typography variant="body1" marginBottom={2}>
        In the{' '}
        <Link color="primary" component={RouterLink} to="/">
          Reference
        </Link>{' '}
        tab, you can find the list of definitions, grouped by chapter.
      </Typography>

      <Typography variant="h5">Favourites</Typography>
      <Typography variant="body1" marginBottom={2}>
        Go to the{' '}
        <Link color="primary" to="/" component={RouterLink}>
          Reference
        </Link>{' '}
        page and click the{' '}
        <BookmarkAddOutlinedIcon
          color="action"
          fontSize="small"
          style={{ verticalAlign: 'text-top' }}
        />{' '}
        icon to add some definitions to your favourites. You can browse your
        favourites{' '}
        <Link color="primary" to="/favourites" component={RouterLink}>
          here
        </Link>
        .
      </Typography>

      <Typography variant="h5">Quiz</Typography>
      <Typography variant="body1" marginBottom={2}>
        Test your memory in the{' '}
        <Link component={RouterLink} to="/quiz">
          Quiz
        </Link>{' '}
        tab! Find a term, given its definition. You can narrow which chapters
        you want to train with.
      </Typography>

      <Typography variant="h5">Feedback</Typography>
      <Typography variant="body1" marginBottom={4}>
        Is something wrong? A bug? A question? An idea? A request? Click the{' '}
        <FeedbackIcon
          color="action"
          fontSize="small"
          style={{ verticalAlign: 'text-top' }}
        />{' '}
        icon in the top-right corner to get in touch!
      </Typography>

      <Typography variant="h4">Credits</Typography>
      <Typography variant="body1" marginBottom={4}>
        All the definitions were handwritten from the book{' '}
        <Link
          href="https://www.macmillanlearning.com/college/us/product/The-American-Promise-Volume-1/p/1319208894"
          target="_blank"
        >
          The American Promise (Roark et al., 2019)
        </Link>
        . The rest of the{' '}
        <Link href="https://github.com/Haltarys/HIST130-Quiz" target="_blank">
          code
        </Link>{' '}
        was written by me,{' '}
        <Link href="https://github.com/Haltarys" target="_blank">
          Haltarys
        </Link>
        , under an{' '}
        <Link href="https://mit-license.org/" target="_blank">
          MIT licence
        </Link>
        .
      </Typography>
    </>
  );
}

export default About;
