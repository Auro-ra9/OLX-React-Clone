import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase/firebase";

type UserContextType = {
    isUserPresent: boolean;
    loading: boolean;
    userId: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [isUserPresent, setIsUserPresent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsUserPresent(!!currentUser); // Update user presence status
            setUserId(currentUser ? currentUser.uid : null); // Set user ID if present
            setLoading(false); // Mark loading as complete
        });

        return () => unsubscribe(); // Clean up subscription on unmount
    }, []);

    return (
        <UserContext.Provider value={{ isUserPresent, loading, userId }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserAuthCheck = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("User context is undefined");
    }

    return context; // Return the user context
};
