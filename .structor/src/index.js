require('../../client/src/assets/css/react-widgets.css');
require('../../client/src/assets/css/bootstrap.css');
require('../../client/src/assets/css/font-awesome.css');
require('../../client/src/assets/css/app.css');
require('../../client/src/assets/js/bootstrap.js');
var Moment = require('moment');
var momentLocalizer = require('react-widgets/lib/localizers/moment');
momentLocalizer(Moment);
var numberLocalizer = require('react-widgets/lib/localizers/simple-number');
numberLocalizer();
module.exports = {
    Router: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    Bootstrap: {
        Grid: require('react-bootstrap').Grid,
        Row: require('react-bootstrap').Row,
        Col: require('react-bootstrap').Col,
        ButtonToolbar: require('react-bootstrap').ButtonToolbar,
        ButtonGroup: require('react-bootstrap').ButtonGroup,
        Button: require('react-bootstrap').Button,
        DropdownButton: require('react-bootstrap').DropdownButton,
        SplitButton: require('react-bootstrap').SplitButton,
        MenuItem: require('react-bootstrap').MenuItem,
        Panel: require('react-bootstrap').Panel,
        PanelGroup: require('../../client/src/components/Bootstrap').PanelGroup,
        Input: require('react-bootstrap').Input,
        Table: require('react-bootstrap').Table,
        Tabs: require('../../client/src/components/Bootstrap').Tabs,
        Tab: require('react-bootstrap').Tab,
        Carousel: require('react-bootstrap').Carousel,
        CarouselItem: require('react-bootstrap').CarouselItem,
        Image: require('react-bootstrap').Image,
        Thumbnail: require('react-bootstrap').Thumbnail,
        ProgressBar: require('react-bootstrap').ProgressBar,
        Breadcrumb: require('react-bootstrap').Breadcrumb,
        BreadcrumbItem: require('react-bootstrap').BreadcrumbItem,
        Pagination: require('react-bootstrap').Pagination,
        Pager: require('react-bootstrap').Pager,
        PageItem: require('react-bootstrap').PageItem,
        ListGroup: require('react-bootstrap').ListGroup,
        ListGroupItem: require('react-bootstrap').ListGroupItem,
        Label: require('react-bootstrap').Label,
        Badge: require('react-bootstrap').Badge,
        Well: require('react-bootstrap').Well,
        Alert: require('react-bootstrap').Alert,
        Jumbotron: require('react-bootstrap').Jumbotron,
        PageHeader: require('react-bootstrap').PageHeader,
        AlertDismissable: require('../../client/src/components/Bootstrap').AlertDismissable
    },
    BootstrapNavigation: {
        Navbar: require('react-bootstrap').Navbar,
        NavbarCollapsible: require('../../client/src/components/BootstrapNavigation').NavbarCollapsible,
        Nav: require('react-bootstrap').Nav,
        NavItem: require('react-bootstrap').NavItem,
        NavDropdown: require('react-bootstrap').NavDropdown,
        NavItemLink: require('../../client/src/components/BootstrapNavigation').NavItemLink,
        MenuItemLink: require('../../client/src/components/BootstrapNavigation').MenuItemLink
    },
    Widgets: {
        DropdownList: require('react-widgets').DropdownList,
        Combobox: require('react-widgets').Combobox,
        Multiselect: require('react-widgets').Multiselect,
        NumberPicker: require('react-widgets').NumberPicker,
        SelectList: require('react-widgets').SelectList,
        CalendarWrapper: require('../../client/src/components/Widgets/CalendarWrapper.jsx'),
        DateTimePickerWrapper: require('../../client/src/components/Widgets/DateTimePickerWrapper.jsx')
    },
    Stateful: {
        InputTextStateful: require('../../client/src/components/Stateful/InputTextStateful.jsx'),
        CheckboxStateful: require('../../client/src/components/Stateful/CheckboxStateful.jsx'),
        DropdownStateful: require('../../client/src/components/Stateful/DropdownStateful.jsx'),
        DateTimePickerStateful: require('../../client/src/components/Stateful/DateTimePickerStateful.jsx'),
        Spinner: require('../../client/src/components/Stateful/Spinner.jsx')
    },
    Authentication: {
        SignInOutForm: require('../../client/src/containers/Authentication/SignInOutForm.jsx'),
        AutoSignIn: require('../../client/src/containers/Authentication/AutoSignIn.jsx'),
        UserProfileNavItemLink: require('../../client/src/containers/Authentication/UserProfileNavItemLink.jsx')
    },
    Project: {
        ProjectInfoPanel: require('../../client/src/containers/Project/ProjectInfoPanel.jsx')
    }
};