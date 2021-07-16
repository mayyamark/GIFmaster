import React from 'react';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';

import useStyles from './LinkItem.styles';

interface ExtendStyles {
  content?: string | undefined;
}

interface Props {
  href: string;
  label: string;
  extendStyles?: ExtendStyles;
  // eslint-disable-next-line @typescript-eslint/ban-types
  IconComponent: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

const LinkItem: React.FC<Props> = ({
  href,
  label,
  IconComponent,
  extendStyles,
  ...other
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Link
      href={href}
      {...other}
      className={extendStyles?.content}
      color='inherit'
      underline='none'
    >
      <ListItem button>
        <ListItemIcon>
          <IconComponent className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};

export default LinkItem;
