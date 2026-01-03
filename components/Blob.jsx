import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BlobCanvas = () => {
  const location = useLocation();
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isHome = location.pathname === '/home';

  useEffect(() => {
    if (!isHome) {
      setMounted(false);
      return;
    }
    // Helper to determine if desktop
    const isDesktop = () => window.innerWidth > 768;

    class Blob {
      constructor() {
        this.points = [];
      }

      init() {
        for (let i = 0; i < this.numPoints; i++) {
          let point = new Point(this.divisional * (i + 1), this);
          // point.acceleration = -1 + Math.random() * 2;
          this.push(point);
        }
      }

      render() {
        let canvas = this.canvas;
        let ctx = this.ctx;
        let position = this.position;
        let pointsArray = this.points;
        let radius = this.radius;
        let points = this.numPoints;
        let divisional = this.divisional;
        let center = this.center;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

        let p0 = pointsArray[points - 1].position;
        let p1 = pointsArray[0].position;
        let _p2 = p1;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

        for (let i = 1; i < points; i++) {
          pointsArray[i].solveWith(
            pointsArray[i - 1],
            pointsArray[i + 1] || pointsArray[0]
          );

          let p2 = pointsArray[i].position;
          var xc = (p1.x + p2.x) / 2;
          var yc = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
          // ctx.lineTo(p2.x, p2.y);

          ctx.fillStyle = 'var(--color-primary)';
          // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

          p1 = p2;
        }

        var xc = (p1.x + _p2.x) / 2;
        var yc = (p1.y + _p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
        // ctx.lineTo(_p2.x, _p2.y);

        ctx.closePath();

        // Render as ASCII characters inside the blob path
        try {
          // use the explicit blob color if set; resolve CSS var if provided
          const c = this.color;
          if (typeof c === 'string' && c.trim().startsWith('var(')) {
            const varName = c.trim().slice(4, -1);
            const resolved = getComputedStyle(document.documentElement).getPropertyValue(varName) || '#000';
            ctx.fillStyle = resolved.trim();
          } else {
            ctx.fillStyle = c || '#000';
          }
        } catch (e) {
          ctx.fillStyle = '#000';
        }

        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        // choose a small set of characters for shading
        const chars = ['@', '#', '%', '*', '+', '=', '-', ':', '.', ' '];

        // sampling density (pixel step) — coarser on small canvases
        const step = canvas.width > 550 ? 12 : 10;

        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            const sampleX = x + step / 2;
            const sampleY = y + step / 2;
            if (ctx.isPointInPath(sampleX, sampleY)) {
              // distance from center to determine char density
              const dx = sampleX - center.x;
              const dy = sampleY - center.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const t = Math.min(1, Math.max(0, dist / (radius + step * 2)));
              const idx = Math.floor((1 - t) * (chars.length - 1));
              const ch = chars[idx];

              // set font size relative to step
              ctx.font = `${Math.max(8, Math.floor(step * 0.9))}px monospace`;
              ctx.fillText(ch, sampleX, sampleY);
            }
          }
        }

        requestAnimationFrame(this.render.bind(this));
      }

      push(item) {
        if (item instanceof Point) {
          this.points.push(item);
        }
      }

      set color(value) {
        this._color = value;
      }
      get color() {
        return this._color || '#000000'; // Changed to a red color
      }

      set canvas(value) {
        if (
          value instanceof HTMLElement &&
          value.tagName.toLowerCase() === 'canvas'
        ) {
          this._canvas = value;
          this.ctx = this._canvas.getContext('2d');
        }
      }
      get canvas() {
        return this._canvas;
      }

      set numPoints(value) {
        if (value > 2) {
          this._points = value;
        }
      }
      get numPoints() {
        return this._points || 32;
      }

      set radius(value) {
        if (value > 0) {
          this._radius = value;
        }
      }
      get radius() {
        return this._radius || 150;
      }

      set position(value) {
        if (typeof value == 'object' && value.x && value.y) {
          this._position = value;
        }
      }
      get position() {
        return this._position || { x: 0.5, y: 0.5 };
      }

      get divisional() {
        return (Math.PI * 2) / this.numPoints;
      }

      get center() {
        return {
          x: this.canvas.width * this.position.x,
          y: this.canvas.height * this.position.y,
        };
      }

      set running(value) {
        this._running = value === true;
      }
      get running() {
        return this.running !== false;
      }
    }

    class Point {
      constructor(azimuth, parent) {
        this.parent = parent;
        this.azimuth = Math.PI - azimuth;
        this._components = {
          x: Math.cos(this.azimuth),
          y: Math.sin(this.azimuth),
        };

        this.acceleration = -0.3 + Math.random() * 0.6;
      }

      solveWith(leftPoint, rightPoint) {
        this.acceleration =
          (-0.3 * this.radialEffect +
            (leftPoint.radialEffect - this.radialEffect) +
            (rightPoint.radialEffect - this.radialEffect)) *
            this.elasticity -
          this.speed * this.friction;
      }

      set acceleration(value) {
        if (typeof value == 'number') {
          this._acceleration = value;
          this.speed += this._acceleration * 2;
        }
      }
      get acceleration() {
        return this._acceleration || 0;
      }

      set speed(value) {
        if (typeof value == 'number') {
          this._speed = value;
          this.radialEffect += this._speed * 5;
        }
      }
      get speed() {
        return this._speed || 0;
      }

      set radialEffect(value) {
        if (typeof value == 'number') {
          this._radialEffect = value;
        }
      }
      get radialEffect() {
        return this._radialEffect || 0;
      }

      get position() {
        return {
          x:
            this.parent.center.x +
            this.components.x * (this.parent.radius + this.radialEffect),
          y:
            this.parent.center.y +
            this.components.y * (this.parent.radius + this.radialEffect),
        };
      }

      get components() {
        return this._components;
      }

      set elasticity(value) {
        if (typeof value === 'number') {
          this._elasticity = value;
        }
      }
      get elasticity() {
        return this._elasticity || 0.001;
      }
      set friction(value) {
        if (typeof value === 'number') {
          this._friction = value;
        }
      }
      get friction() {
        return this._friction || 0.0085;
      }
    }

    const blob = new Blob();

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Responsive blob size
    const setBlobSize = () => {
      if (isDesktop()) {
        canvas.width = 600;
        canvas.height = 600;
        blob.radius = 170;
      } else {
        canvas.width = 500;
        canvas.height = 500;
        blob.radius = 135;
      }
    };

    const resize = () => {
      setBlobSize();
    };

    window.addEventListener('resize', resize);
    setTimeout(resize, 0);

    blob.canvas = canvas;
    // force the blob color to solid black
    blob.color = '#000000';
    setBlobSize();
    blob.init();
    blob.render();

    // trigger entrance animation
    setMounted(true);

    // Mouse interaction (no parallax)
    let oldMousePoint = { x: 0, y: 0 };
    let hover = false;

    const mouseMove = (e) => {
      // Get canvas position relative to viewport
      const canvasRect = canvas.getBoundingClientRect();
      const canvasMouseX = e.clientX - canvasRect.left;
      const canvasMouseY = e.clientY - canvasRect.top;

      let pos = blob.center;
      let diff = { x: canvasMouseX - pos.x, y: canvasMouseY - pos.y };
      let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
      let angle = null;

      blob.mousePos = { x: pos.x - canvasMouseX, y: pos.y - canvasMouseY };

      if (dist < blob.radius && hover === false) {
        let vector = { x: canvasMouseX - pos.x, y: canvasMouseY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = true;
      } else if (dist > blob.radius && hover === true) {
        let vector = { x: canvasMouseX - pos.x, y: canvasMouseY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = false;
        blob.color = null;
      }

      if (typeof angle == 'number') {
        let nearestPoint = null;
        let distanceFromPoint = 100;

        blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            nearestPoint = point;
            distanceFromPoint = Math.abs(angle - point.azimuth);
          }
        });

        if (nearestPoint) {
          let strength = {
            x: oldMousePoint.x - canvasMouseX,
            y: oldMousePoint.y - canvasMouseY,
          };
          strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
          if (strength > 100) strength = 100;
          nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
        }
      }

      oldMousePoint.x = canvasMouseX;
      oldMousePoint.y = canvasMouseY;
    };

    window.addEventListener('pointermove', mouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', mouseMove);
    };
  }, [isHome]);

  if (!isHome) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: mounted ? 'translate(-50%, -50%)' : 'translate(-50%, -46%)',
        width: window.innerWidth > 768 ? 'min(600px, 90vw)' : 'min(500px, 90vw)',
        height: window.innerWidth > 768 ? 'min(600px, 90vw)' : 'min(500px, 90vw)',
        maxWidth: '100vw',
        maxHeight: '100vh',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 900ms cubic-bezier(0.23, 1, 0.32, 1), transform 900ms cubic-bezier(0.23, 1, 0.32, 1)',
        zIndex: 0, // ensure canvas sits behind positioned text inside the same container
        pointerEvents: 'none', // disable pointer events so it doesn't block UI (mouse is tracked via window)
      }}
    />
  );
};


export default BlobCanvas;