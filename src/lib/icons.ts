import arrowRight from '@phosphor-icons/core/regular/arrow-right.svg?raw';
import arrowUpRight from '@phosphor-icons/core/regular/arrow-up-right.svg?raw';
import buildings from '@phosphor-icons/core/regular/buildings.svg?raw';
import calculator from '@phosphor-icons/core/regular/calculator.svg?raw';
import chartLineUp from '@phosphor-icons/core/regular/chart-line-up.svg?raw';
import check from '@phosphor-icons/core/regular/check.svg?raw';
import database from '@phosphor-icons/core/regular/database.svg?raw';
import envelopeSimple from '@phosphor-icons/core/regular/envelope-simple.svg?raw';
import fileText from '@phosphor-icons/core/regular/file-text.svg?raw';
import identificationCard from '@phosphor-icons/core/regular/identification-card.svg?raw';
import lightbulb from '@phosphor-icons/core/regular/lightbulb.svg?raw';
import list from '@phosphor-icons/core/regular/list.svg?raw';
import percent from '@phosphor-icons/core/regular/percent.svg?raw';
import receipt from '@phosphor-icons/core/regular/receipt.svg?raw';
import rocketLaunch from '@phosphor-icons/core/regular/rocket-launch.svg?raw';
import user from '@phosphor-icons/core/regular/user.svg?raw';
import whatsappLogo from '@phosphor-icons/core/regular/whatsapp-logo.svg?raw';
import x from '@phosphor-icons/core/regular/x.svg?raw';

export const icons = {
  'arrow-right': arrowRight,
  'arrow-up-right': arrowUpRight,
  buildings,
  calculator,
  'chart-line-up': chartLineUp,
  check,
  database,
  'envelope-simple': envelopeSimple,
  'file-text': fileText,
  'identification-card': identificationCard,
  lightbulb,
  list,
  percent,
  receipt,
  'rocket-launch': rocketLaunch,
  user,
  'whatsapp-logo': whatsappLogo,
  x,
} as const;

export type IconName = keyof typeof icons;
