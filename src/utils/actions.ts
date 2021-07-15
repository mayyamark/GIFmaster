import { getItem, setItem } from './storage';
import RAITINGS from '@app/constants/raitings';

const addToFavourites = (stringOfIds: string): void =>
  setItem('favourites', stringOfIds);

const removeFromFavourites = (favouritesIds: string, idToRemove: string) => {
  const newFavourites = favouritesIds
    .split(',')
    .filter((favouritedId: string) => favouritedId !== idToRemove)
    .join(',');

  addToFavourites(newFavourites);
};

export const changeFavourites = (id: string): void => {
  const favourites = getItem('favourites');

  if (!favourites) {
    addToFavourites(id);
  } else {
    if (favourites.includes(id)) {
      removeFromFavourites(favourites, id);
    } else {
      const newFavourites = favourites.concat(`,${id}`);

      addToFavourites(newFavourites);
    }
  }
};

interface RaitingExplanation {
  title: string;
  additional: string[];
}

export const explainRaiting = (raiting: string): RaitingExplanation => {
  switch (raiting) {
    case RAITINGS.level1: {
      return {
        title:
          'Contains images that are broadly accepted as appropriate and commonly witnessed by people in a public environment.',
        additional: [
          'No profanity',
          'No sexual content - real or animated (no innuendo or partial nudity, nothing provocative)',
          'No violence or threatening imagery',
          'No weapons (finger, water, and Nerf guns are exceptions)',
          'No substances/drugs',
        ],
      };
    }
    case RAITINGS.level2: {
      return {
        title:
          'Contains images that are commonly witnessed in a public environment, but not as broadly accepted as appropriate.',
        additional: [
          'Mild profanity (ex: butt, hell, damn, suck, etc.)',
          'Mild bathroom humor',
          'Mild sexual content (ex: kissing on the lips, fully clothed provocative body movements.)',
          'Mild violence (yelling angrily, smashing inanimate objects, fails, facetious references to acts of violence, etc.)',
          'Images that feature real guns in holsters and people aiming or shooting non realistic looking guns from pop culture',
          'Images with medieval weapons with no blood and mild duels without injury',
          'Mildly abnormal or frightening activities, movements, or gestures (ex: spooky images from horror movies without gore, horror makeup, etc.)',
          'Images of tobacco and alcohol, their brand names, and mild usage (ex: sipping, cheers, holding cigarettes, etc.)',
        ],
      };
    }
    case RAITINGS.level3: {
      return {
        title:
          'Contains images that are typically not seen unless sought out, but still commonly witnessed.',
        additional: [
          'Moderate profanity and implied abbreviations (ex: human anatomy, names of drugs, wtf, etc.)',
          'Use of middle finger as a rude gesture',
          'Sexual content and themes, including sexual innuendo with no nudity (ex. making out, sexually suggestive movements, references to sex acts)',
          'Exploitation of the human body while partially covered',
          'Images featuring non-gushing blood in a violent context',
          'Moderately violent or threatening behaviour or gestures (ex: pointing a knife, excerpts from horror movies, knockouts, injury)',
          'Realistic guns (ex: guns being held, pointed, shot, etc.)',
          'Heavy use of alcohol (ex: chugging, keg stands, beer bogs, etc.)',
          'References to marijuana, illegal drug use, and fictional images of use',
          'Challenging religion or religious figures',
        ],
      };
    }
    case RAITINGS.level4: {
      return {
        title:
          'Contains images that are typically not seen unless sought out and could be considered alarming if witnessed.',
        additional: [
          'Severe profanity',
          'Nonpornographic images with strong sexual themes and innuendo, very revealing clothing, main focus on bodies, and otherwise arousing images with partial nudity.',
          'Crudely drawn or humorous cartoons or CGI that depicts genitalia',
          'Imagery and content from movies, TV, and video games that is highly disturbing, alarming,distressing, or dark, even if there is no gore',
          'Any simulated violence with gore',
          'Heavy use of illegal drugs in a fictional settings',
          'Very crude and vulgar humor',
        ],
      };
    }

    default: {
      return {
        title: '',
        additional: [''],
      };
    }
  }
};
