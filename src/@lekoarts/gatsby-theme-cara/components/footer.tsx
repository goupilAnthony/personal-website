/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import Emoji from "./Emoji"
import { Typography } from '@material-ui/core'


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <Typography variant="body2">Codé avec <Emoji symbol="🧡" label="heart" /> par ATLAS SOLUTIONS &copy; {new Date().getFullYear()}.</Typography>
    </Box>
  )
}

export default Footer

const DarkModeToggleButton = ({ toggleColorMode, isDark }) => {
  return (
    <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
  )
}
