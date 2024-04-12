import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type NavigationState = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};
const NavigationContext = createContext<NavigationState>({
  isOpen: true,
  setIsOpen: () => {},
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const state = {
    isOpen,
    setIsOpen,
  };
  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};
