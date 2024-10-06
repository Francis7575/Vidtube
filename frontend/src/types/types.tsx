export type NavbarProps = {
    onLogout?: () => void;
    loggedIn?: boolean;
    username?: string;
}

export type SearchInputProps = NavbarProps

export type LoginData = {
    email: string,
    password: string
    [key: string]: string | number;
}

export type SignupData = {
    username: string,
    email: string,
    password: string,
    [key: string]: string | number
}

export type HomeProps = {
    onLogout: () => void
    loggedIn: boolean
    username: string
}

export type searchData = {
    id: {
        videoId: string;
        channelId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            high: {
                url: string;
            }
            medium: {
                url: string
            }
        }
        channelTitle: string;
        publishTime: string;
        channelId: string;
    }
    statistics: {
        subscriberCount?: string;
        viewCount: string
        likeCount: string
    };
}

export type SidebarProps = {
    selectedCategory?: string,
    setSelectedCategory?: (data: string) => void
}

export type IRouterType = {
    title: string;
    path?: string;
    element: JSX.Element;
    children?: IRouterType[];
  }