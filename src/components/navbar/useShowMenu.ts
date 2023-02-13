import { useState, useEffect } from "react";

function useShowMenu(defaultValue?: boolean): UseShowMenuOutput {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.pageYOffset;
      if (previousScrollPosition - currentScrollPosition < 0) {
        setVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setVisible(true);
      }
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return { visible };
}

interface UseShowMenuOutput {
  visible: boolean;
}

export default useShowMenu;
