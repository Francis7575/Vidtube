export type CommonProps = {
    onSearchClick?: () => void;
    isInputVisible?: boolean;
    isSearchVisible?: boolean;
    onUserIconClick?: () => void;
    isUserOptionsVisible?: boolean;
    onLogout?: () => void;
    loggedIn?: boolean;
    username?: string;
};

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

export type LoginProps = {
    onLogin: (data: LoginData, rememberMe: boolean) => void
}

export type SignupData = {
    username: string,
    email: string,
    password: string,
    [key: string]: string | number
}

export type SignupProps = {
    onSignup: (data: SignupData) => void
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
        }
        channelTitle: string;
        publishTime: string;
        channelId: string;
    }
    statistics?: {
        subscriberCount?: string;
    };
}

export type SidebarProps = {
    selectedCategory?: string,
    setSelectedCategory?: (data: string) => void
}
