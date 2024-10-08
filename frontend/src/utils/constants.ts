import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import MouseIcon from '@mui/icons-material/Mouse';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { SvgIconComponent } from '@mui/icons-material';

type Category = {
    name: string,
    icon: SvgIconComponent
}

export const categories: Category[] = [
    { name: 'New', icon: HomeIcon },
    { name: 'MrBeast', icon: MouseIcon },
    { name: 'Dua Lipa', icon: MusicNoteIcon },
    { name: 'Katy Perry', icon: MusicNoteIcon },
    { name: 'Eminem', icon: MusicNoteIcon },
    { name: 'Taylor Swift', icon: MusicNoteIcon },
    { name: 'Learn Coding', icon: CodeIcon },
    { name: 'ReactJS', icon: CodeIcon },
    { name: 'NextJS', icon: CodeIcon },
    { name: 'Music', icon: MusicNoteIcon },
    { name: 'Education', icon: SchoolIcon },
    { name: 'Podcast', icon: GraphicEqIcon },
    { name: 'Movies', icon: OndemandVideoIcon },
    { name: 'Gaming', icon: SportsEsportsIcon },
    { name: 'Fashion', icon: CheckroomIcon },
    { name: 'Beauty', icon: FaceRetouchingNaturalIcon },
    { name: 'Comedy', icon: TheaterComedyIcon },
    { name: 'Gym', icon: FitnessCenterIcon },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

