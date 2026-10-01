# Darwin Israel — IT Learning Portfolio

A static portfolio website built for Vercel.

## Included
- Home
- Credentials
- Attended Webinars / Seminars
- Tours / future educational-tour section
- 7 uploaded certificate images
- Certificate preview modal
- Topic filters
- Responsive mobile navigation

## Deploy to Vercel

### Easiest method
1. Open Vercel Drop: https://vercel.com/drop
2. Upload the entire `darwin-israel-portfolio` folder (or zip it first).
3. Choose your project name.
4. Click Deploy.

Vercel supports deploying a folder/zip directly through Vercel Drop without Git or a local CLI.

### GitHub method
1. Create a GitHub repository.
2. Upload all files in this folder.
3. In Vercel, choose Add New → Project.
4. Import the GitHub repository.
5. Deploy with the detected static-site settings.

## Updating certificates
Put new certificate images in:
`assets/certificates/`

Then add a new `.seminar-card` in `index.html` and point its `data-image` to the new image.

## Note
This is a static portfolio, so it does not require a database or backend.


## Certificate verification links
Each certificate card now has a consistently aligned **View certificate** button. The five certificates with public verification pages also have a **Verify credential** link. The two certificates without public verification pages only show **View certificate**.


## Seminar ordering and screenshots
The Attended Webinars / Seminars section is sorted by attended/event date, newest first. Each entry also includes a screenshot gallery containing the supplied attendance/event screenshots.
