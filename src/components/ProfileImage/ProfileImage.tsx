import * as styles from './ProfileImage.styles';

type Props = {
  initials: string;
};

const ProfileImage = ({ initials }: Props) => {
  return <styles.Wrapper>{initials}</styles.Wrapper>;
};

export default ProfileImage;
