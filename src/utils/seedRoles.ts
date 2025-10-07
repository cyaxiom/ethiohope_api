import Role from '../models/Role';

const defaultRoles = ['student', 'teacher', 'admin', 'manager', 'staff'];

export const seedRoles = async () => {
  const existingRoles = await Role.find({});
  const existingRoleNames = existingRoles.map(r => r.name);

  const rolesToCreate = defaultRoles.filter(r => !existingRoleNames.includes(r));

  if (rolesToCreate.length > 0) {
    await Role.insertMany(rolesToCreate.map(name => ({ name })));
    console.log(`default roles created`);
  }
};
