import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";
/*import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";*/
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThreadSection = () => {
  return (
    <div className="mt-[2em] rounded-lg bg-dark-200 md:w-[55%] md:mt-0 lg:w-full lg:mt-[2em]">
      {/*<div className="p-5 ">
        
        <div className="mb-[2em]">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <p className="bg-blue-800 rounded-full w-[30px] h-[30px] text-black font-bold text-center  pt-[.1em]">
                O
              </p>
              <p className="font-semibold">Orlando Diggs</p>
            </div>
            <div>
              <p className="text-dark-500">22 hours ago</p>
            </div>
          </div>
          <div className="mt-[1em]">
            <p className="message bg-dark-350 py-2 px-3 rounded-md ">
              Can you make it more interesting ?
            </p>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <p className="bg-blue-500 rounded-full w-[30px] h-[30px] text-black font-bold text-center pt-[.1em]">
                N
              </p>
              <p className="font-semibold">Nikky Eva</p>
            </div>
            <div>
              <p className="text-dark-500">22 hours ago</p>
            </div>
          </div>
          <div className="mt-[1em]">
            <p className="message bg-dark-350 py-2 px-3 rounded-md ">
              Yes sure I was thinking about adding a live comment feature to the
              application what do you think about it?
            </p>
          </div>
        </div>
      </div>*/}

      {/*Reply to a thread */}
      {/*<div className="mt-[2em] bg-dark-700 p-3 rounded-b-lg flex items-center justify-between">
        <input
          placeholder="Reply to thread..."
          className="bg-transparent outline-none"
        />
        <div className="comment-thread-section-btn">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-white " />
        </div>
      </div>*/}

      {/*<Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>*/}
    </div>
  );
};

export default ThreadSection;
