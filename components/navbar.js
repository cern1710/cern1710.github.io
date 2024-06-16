import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleButton from './toggle.js'

const LinkItem = ({ href, path,target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? "#202023" : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const NavBar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', "#20202380")}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >

        <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo/>
                </Heading>
            </Flex>

            <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, nmd: 0}}
            >
                <LinkItem href="/works" path={path}>
                    Works
                </LinkItem>
                <LinkItem href="/posts" path={path}>
                    Posts
                </LinkItem>
            </Stack>

            <Box flex={1} align="right">
                <ToggleButton />
                <Box ml={2} display={{base: 'inline-block'}}>
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem as={MenuLink} href="/">
                                About
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/works">
                                Projects
                            </MenuItem>
                            <MenuItem
                                as={Link}
                                href="https://letterboxd.com/cern1710/"
                            >
                                Letterboxd
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Container>
    </Box>
    )
}

export default NavBar