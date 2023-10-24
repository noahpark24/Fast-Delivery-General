import { NextPage } from 'next';
import '../styles/photo.css';
interface Props {
  scale: string;
  photo: any;
}
const Photo: NextPage<Props> = ({ photo, scale }) => (
  <div
    data-testid="Photo"
    className={'photoCont ' + 'p' + scale}
    style={{ backgroundImage: `url(${photo})` }}
  ></div>
);
export default Photo;
