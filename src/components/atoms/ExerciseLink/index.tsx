import { Link } from "react-router-dom";

type Props = {
  link: string;
  page: string;
};

function ExerciseLink({ link, page }: Props) {
  return <Link to={link}>{page}</Link>;
}

export default ExerciseLink;
