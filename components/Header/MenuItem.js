const MenuItem = ({ item }) => (
    <a href={item.link} className="capitalize font-medium no-underline px-2 text-gray-200">
        {item.name}
    </a>
);

export default MenuItem;