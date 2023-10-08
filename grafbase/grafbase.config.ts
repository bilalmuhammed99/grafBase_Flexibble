import { g, auth, config } from '@grafbase/sdk'


const User = g.model("user",{
  name:g.string().length({min:2 , max:20}),
  emil : g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url(),
  linkedinUrl:g.url().optional(),
  projects:g.relation(()=> Project).list().optional(),
  password:g.string(),
});


const Project = g.model("project",{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  githubUrl:g.url(),
  liveSiteUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User),

})

  


export default config({
  schema: g
})
