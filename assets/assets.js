import logo from './logo.png';
import logo_dark from './logo_dark.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import hand_icon from './hand-icon.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import jupyter from './jupyter.png';
import tensorflow from './tensorflow.png';
import pytorch from './pytorch.png';
import react from './react.png';
import git from './git.png';
import send_icon from './send-icon.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import linkedin from './linkedin.png';
import linkedin_dark from './linkedin-dark.png';
import github from './github.png';
import github_dark from './github-dark.png';
import personal_website from './personal-website.png';
import life_expectancy_predictions from './life-expectancy-predictions.png';
import music_visualization from './music-visualization.png';

export const assets = {
    logo,
    logo_dark,
    moon_icon,
    sun_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,
    hand_icon,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    jupyter,
    tensorflow,
    pytorch,
    react,
    git,
    send_icon,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    linkedin,
    linkedin_dark,
    github,
    github_dark,
    personal_website,
    life_expectancy_predictions,
    music_visualization,
};

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, C++, C, Java, and JavaScript', href: 'https://github.com/j-o-s-h-0/', target: '_blank' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BS in Computer Science at UIUC (May 2026)', href: 'https://siebelschool.illinois.edu/', target: '_blank' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built projects spanning a variety of topics', href: '#projects', target: '_self' },
];

export const toolsData = [
    { name: 'VS Code', src: assets.vscode, href: 'https://code.visualstudio.com/' },
    { name: 'Jupyter', src: assets.jupyter, href: 'https://jupyter.org/' },
    { name: 'TensorFlow', src: assets.tensorflow, href: 'https://www.tensorflow.org/' },
    { name: 'PyTorch', src: assets.pytorch, href: 'https://pytorch.org/' },
    { name: 'React', src: assets.react, href: 'https://react.dev/' },
    { name: 'git', src: assets.git, href: 'https://git-scm.com/' },
];

export const workData = [
    { title: 'Personal Website', description: 'Web Development', src: assets.personal_website, href: 'https://github.com/j-o-s-h-0/personal-website/blob/main/README.md', target: '_blank' },
    { title: 'Life Expectancy Predictions', description: 'Machine Learning', src: assets.life_expectancy_predictions, href: 'https://github.com/j-o-s-h-0/life-expectancy-predictions/blob/main/README.md', target: '_blank' },
    { title: 'Music Visualization', description: 'Machine Learning', src: assets.music_visualization, href: '/music', target: '_self' },
];
