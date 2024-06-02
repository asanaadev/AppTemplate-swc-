export const pathKeys = {
  root: '/',
  settings() {
    return pathKeys.root.concat('settings/');
  },
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
  dashboard() {
    return pathKeys.root.concat('dashboard/');
  },
};
