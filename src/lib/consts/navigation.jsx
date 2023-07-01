import {
	FiUsers
} from 'react-icons/fi'
import {
	RiCalendarEventFill
} from 'react-icons/ri'
import {
	AiFillHome,
	AiFillPicture,
	AiOutlineUser
} from 'react-icons/ai'
import {
	IoAppsOutline,
	IoChatboxOutline
} from 'react-icons/io5'
export const SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <AiFillHome />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <IoAppsOutline />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <IoChatboxOutline />
	},
	{
		key: 'calendar',
		label: 'Calendar',
		path: '/calendar',
		icon: <RiCalendarEventFill />
	},
	{
		key: 'user',
		label: 'User',
		path: '/user',
		icon: <AiOutlineUser />
	},
	{
		key: 'contacts',
		label: 'Contacts',
		path: '/contacts',
		icon: <FiUsers />
	},
	{
		key: 'image',
		label: 'image',
		path: '/images',
		icon: <AiFillPicture />
	}
]