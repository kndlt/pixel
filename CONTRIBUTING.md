# Contributing to Bixel 🧚‍♀️

> *"Every contribution is a spell cast into the digital forest..."*

Thank you for your interest in contributing to Bixel! This guide will help you get started with contributing to our mystical AI chat interface.

## 🌟 Ways to Contribute

- **🐛 Bug Reports**: Found a glitch in the forest? Report it!
- **✨ Feature Requests**: Have ideas for new magical abilities?
- **🔧 Code Contributions**: Help improve Bixel's capabilities
- **📚 Documentation**: Help others understand the magic
- **🎨 Design**: Enhance the mystical user experience
- **🧪 Testing**: Help ensure everything works smoothly

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 22.0.0 or higher
- **pnpm**: Package manager (version 10.11.0+)
- **Git**: For version control

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pixel.git
   cd pixel
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Add your OpenAI API key and other required variables
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

5. **Visit the Application**
   Open [http://localhost:3000](http://localhost:3000) to see Bixel in action!

## 🛠️ Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Testing improvements

### Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   pnpm build
   pnpm lint
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Commit Message Convention

We follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Testing changes
- `chore:` - Maintenance tasks

## 🏗️ Project Structure

```
pixel/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ChatInterface.tsx  # Main chat component
│   ├── ParticleSystem.tsx # Magical particles
│   └── ...
├── lib/                   # Utility libraries
│   ├── openai.ts         # OpenAI integration
│   └── ...
├── docs/                  # Documentation
└── public/               # Static assets
```

## 🎨 Code Style Guidelines

### TypeScript/React

- Use TypeScript for all new code
- Prefer functional components with hooks
- Use meaningful variable and function names
- Add proper type annotations
- Follow React best practices

### CSS/Styling

- Use Tailwind CSS for styling
- Maintain the mystical forest theme
- Ensure responsive design
- Test on mobile devices

### Example Component Structure

```tsx
import { useState, useEffect } from 'react';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export default function MyComponent({ title, onAction }: MyComponentProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Component logic here
  }, []);

  return (
    <div className="mystical-container">
      <h2 className="text-forest-green">{title}</h2>
      {/* Component JSX */}
    </div>
  );
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Chat interface loads correctly
- [ ] Messages send and receive properly
- [ ] Particle effects work smoothly
- [ ] Mobile responsiveness
- [ ] Dark theme consistency
- [ ] Memory persistence works

### Automated Testing

We're working on expanding our test suite. Contributions to testing are especially welcome!

## 📝 Pull Request Process

1. **Ensure your branch is up to date**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Use a descriptive title
   - Explain what changes you made and why
   - Reference any related issues
   - Add screenshots for UI changes

4. **PR Review Process**
   - Maintainers will review your PR
   - Address any feedback
   - Once approved, your PR will be merged

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] Mobile tested
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots here
```

## 🐛 Bug Reports

When reporting bugs, please include:

- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Clear, step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For feature requests, please provide:

- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered
- **Additional context**: Screenshots, mockups, etc.

## 🌍 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Embrace the mystical spirit of Bixel
- Have fun and be creative!

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community chat
- **Documentation**: Check the `/docs` folder

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special thanks in the mystical forest! 🌲✨

---

*"May your code be bug-free and your commits be meaningful!"* - Bixel 🧚‍♀️

Thank you for contributing to the magic! 🌟
